import { Component, HostListener, ViewChild, ElementRef,AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-transform',
  templateUrl: './transform.component.html',
  styleUrls: ['./transform.component.scss']
})

export class TransformComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    console.log(this.letters.nativeElement.offsetWidth);
    console.log(this.letters.nativeElement.offsetHeight);

    this.elementWidth = this.letters.nativeElement.offsetWidth;
    this.elementHeight = this.letters.nativeElement.offsetHeight;
    this.elementPosition =this.letters.nativeElement.getBoundingClientRect();
  }

  elementWidth:any;
  elementHeight:any;
  elementPosition:any;

  constrain = 50;

  @ViewChild('letters')
  letters!: ElementRef;
  
  @HostListener('document:mousemove', ['$event']) 

  onMouseMove(e:any) {
    console.log('x' + e.clientX + 'y' + e.clientY);


    requestAnimationFrame(() => {
      this.transformElement(e.clientX, e.clientY);

    });
  }

  transformElement(x:any, y:any) {
    this.letters.nativeElement.style.transform  = this.transform(x, y);
  }

  transform (x:number, y:number) {
    let calcX = -(y - this.elementPosition.y - (this.elementPosition.height / 2)) / this.constrain;
    let calcY = (x - this.elementPosition.x - (this.elementPosition.width / 2)) / this.constrain;

    return "perspective(100px) "
    + "   rotateX("+ calcX +"deg) "
    + "   rotateY("+ calcY +"deg) ";
  }
}
