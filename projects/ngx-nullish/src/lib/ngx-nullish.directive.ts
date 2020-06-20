import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

// Inspired by *ngIf:
// https://github.com/angular/angular/blob/master/packages/common/src/directives/ng_if.ts

@Directive({
  selector: '[ngxNullish]',
})
export class NgxNullishDirective<T = unknown> {
  static ngTemplateGuard_ngxNullish: 'binding';

  private hasView = false;
  private context: NullishDirectiveContext<T> = {
    ngxNullish: undefined,
    $implicit: undefined,
  };

  static ngTemplateContextGuard<T>(
    dir: NgxNullishDirective<T>,
    ctx: NullishDirectiveContext<T>
  ): ctx is NullishDirectiveContext<NonNullable<T>> {
    return true;
  }

  @Input() set ngxNullish(condition: T) {
    this.context.$implicit = this.context.ngxNullish = condition;
    this._updateView();
  }

  private _updateView() {
    if (this.context.$implicit != null && this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef, this.context);
      this.hasView = false;
    } else if (this.context.$implicit == null && !this.hasView) {
      this.viewContainer.clear();
      this.hasView = true;
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}
}

export type NullishDirectiveContext<T> = { ngxNullish: T; $implicit: T };
