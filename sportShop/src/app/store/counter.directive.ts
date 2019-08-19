import {Directive, Input, SimpleChanges, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appCounterOf]'
})
export class CounterDirective {

  constructor(private container: ViewContainerRef,
              // tslint:disable-next-line:ban-types
              private template: TemplateRef<Object>) { }
  // tslint:disable-next-line:no-input-rename
  @Input('appCounterOf')
  counter: number;
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges(changes: SimpleChanges) {
    this.container.clear();
    for (let i = 0; i < this.counter; i++) {
      this.container.createEmbeddedView(this.template,
        new CounterDirectiveContext(i + 1));
    }
  }
}

class CounterDirectiveContext {
  constructor(public $implicit: any) { }
}
