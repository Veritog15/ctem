import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CommonModule } from '@angular/common';

declare var $: any;

@Component({
  selector: 'app-manual',
  standalone: true,
  imports: [FooterComponent, CommonModule], 
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.css']
})
export class ManualComponent implements AfterViewInit, OnInit {
    
  currentPage = 1;
  totalPages = 24;
  useTurnJS = false;
    
  ngOnInit(): void {
    // Verificar si jQuery y Turn.js están disponibles
    this.checkLibraries();
  }

  ngAfterViewInit(): void {
    // Inicializar Turn.js después de que el DOM esté listo
    setTimeout(() => {
      this.initBook();
    }, 1000); // Aumentado a 1 segundo para asegurar que las librerías se carguen
  }

  checkLibraries(): void {
    console.log('Verificando librerías...');
    
    // Verificar jQuery
    if (typeof window !== 'undefined' && (window as any).jQuery) {
      console.log('jQuery disponible desde window.jQuery');
      this.useTurnJS = true;
    } else if (typeof $ !== 'undefined') {
      console.log('jQuery disponible desde $');
      this.useTurnJS = true;
    } else {
      console.log('jQuery NO disponible');
      this.useTurnJS = false;
    }

    // Verificar Turn.js
    if (this.useTurnJS) {
      if (typeof (window as any).jQuery !== 'undefined' && (window as any).jQuery.fn.turn) {
        console.log('Turn.js disponible desde window.jQuery.fn.turn');
        this.useTurnJS = true;
      } else if (typeof $ !== 'undefined' && $.fn.turn) {
        console.log('Turn.js disponible desde $.fn.turn');
        this.useTurnJS = true;
      } else {
        console.log('Turn.js NO disponible');
        this.useTurnJS = false;
      }
    }
  }

  initBook(): void {
    console.log('Inicializando libro...');
    console.log('useTurnJS:', this.useTurnJS);
    
    if (this.useTurnJS) {
      this.initTurnJS();
    } else {
      console.log('Usando versión de respaldo sin Turn.js');
      this.initFallback();
    }
  }

  initTurnJS(): void {
    console.log('Inicializando con Turn.js...');
    
    // Intentar múltiples formas de acceder a jQuery
    let $jQuery: any = null;
    
    if (typeof window !== 'undefined' && (window as any).jQuery) {
      $jQuery = (window as any).jQuery;
      console.log('Usando window.jQuery');
    } else if (typeof $ !== 'undefined') {
      $jQuery = $;
      console.log('Usando $ global');
    }

    if (!$jQuery) {
      console.error('jQuery no está disponible');
      this.useTurnJS = false;
      this.initFallback();
      return;
    }

    if (typeof $jQuery.fn.turn === 'undefined') {
      console.error('Turn.js no está disponible');
      this.useTurnJS = false;
      this.initFallback();
      return;
    }

    try {
      const flipbook = $jQuery('#flipbook');
      console.log('Elemento flipbook encontrado:', flipbook.length);
      
      if (flipbook.length === 0) {
        console.error('Elemento #flipbook no encontrado');
        this.useTurnJS = false;
        this.initFallback();
        return;
      }

             flipbook.turn({
         width: 800,
         height: 600,
         autoCenter: true,
         acceleration: true,
         elevation: 50,
         gradients: true,
         display: 'double',
         when: {
           turning: (event: any, page: any, view: any) => {
             console.log('Turning to page:', page);
             this.currentPage = page;
           },
           turned: (event: any, page: any, view: any) => {
             console.log('Turned to page:', page);
             this.currentPage = page;
             this.triggerPageAnimation();
           }
         }
       });

      console.log('Libro inicializado correctamente con Turn.js');
    } catch (error) {
      console.error('Error al inicializar el libro con Turn.js:', error);
      this.useTurnJS = false;
      this.initFallback();
    }
  }

  initFallback(): void {
    console.log('Inicializando versión de respaldo...');
    // Mostrar la primera página por defecto
    this.currentPage = 1;
    this.triggerPageAnimation();
  }

  triggerPageAnimation(): void {
    // Forzar la animación de la página actual
    setTimeout(() => {
      const pageElements = document.querySelectorAll('.page-content') as NodeListOf<HTMLElement>;
      pageElements.forEach(element => {
        element.classList.remove('animate');
        element.offsetHeight; // Trigger reflow
        element.classList.add('animate');
      });
    }, 100);
  }

  nextPage(): void {
    if (this.useTurnJS) {
      let $jQuery: any = null;
      if (typeof window !== 'undefined' && (window as any).jQuery) {
        $jQuery = (window as any).jQuery;
      } else if (typeof $ !== 'undefined') {
        $jQuery = $;
      }
      
      if ($jQuery && $jQuery.fn.turn) {
        $jQuery('#flipbook').turn('next');
      } else {
        this.useTurnJS = false;
        this.nextPageFallback();
      }
    } else {
      this.nextPageFallback();
    }
  }

  nextPageFallback(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      console.log('Navegando a página:', this.currentPage);
      this.triggerPageAnimation();
    }
  }

  previousPage(): void {
    if (this.useTurnJS) {
      let $jQuery: any = null;
      if (typeof window !== 'undefined' && (window as any).jQuery) {
        $jQuery = (window as any).jQuery;
      } else if (typeof $ !== 'undefined') {
        $jQuery = $;
      }
      
      if ($jQuery && $jQuery.fn.turn) {
        $jQuery('#flipbook').turn('previous');
      } else {
        this.useTurnJS = false;
        this.previousPageFallback();
      }
    } else {
      this.previousPageFallback();
    }
  }

  previousPageFallback(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      console.log('Navegando a página:', this.currentPage);
      this.triggerPageAnimation();
    }
  }

  goToPage(page: number): void {
    if (this.useTurnJS) {
      let $jQuery: any = null;
      if (typeof window !== 'undefined' && (window as any).jQuery) {
        $jQuery = (window as any).jQuery;
      } else if (typeof $ !== 'undefined') {
        $jQuery = $;
      }
      
      if ($jQuery && $jQuery.fn.turn) {
        $jQuery('#flipbook').turn('page', page);
      } else {
        this.useTurnJS = false;
        this.goToPageFallback(page);
      }
    } else {
      this.goToPageFallback(page);
    }
  }

  goToPageFallback(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      console.log('Navegando a página:', this.currentPage);
      this.triggerPageAnimation();
    }
  }

  // Método para verificar si se puede navegar
  canGoNext(): boolean {
    return this.currentPage < this.totalPages;
  }

  canGoPrevious(): boolean {
    return this.currentPage > 1;
  }
}