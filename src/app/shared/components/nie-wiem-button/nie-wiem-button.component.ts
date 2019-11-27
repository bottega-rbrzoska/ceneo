import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ce-nie-wiem-button',
  templateUrl: './nie-wiem-button.component.html',
  styleUrls: ['./nie-wiem-button.component.scss'],
  providers: [{ provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NieWiemButtonComponent), multi: true}]
})
export class NieWiemButtonComponent implements OnInit, ControlValueAccessor {

  isDisabled = false;
  selectedValue: 'chyba'| 'nie wiem' | 'yyy';

  onChange: any = () => {};
  onTouch: any = () => {};

  writeValue(val: any): void {
    this.selectedValue = val;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  handleClick(val) {
    this.selectedValue = val;
    this.onChange(val);
  }
  constructor() { }

  ngOnInit() {
  }

}
