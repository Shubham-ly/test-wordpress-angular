import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'dropdown-selector',
  templateUrl: './dropdown-selector.component.html',
  styleUrls: ['./dropdown-selector.component.scss'],
  host: {
    '(document:keydown)': 'handleKeyboardEvents($event)',
  },
})
export class DropdownSelectorComponent implements OnInit {
  @Input() options: any;
  @Input() title: string = '';
  @Output() currentValueChange = new EventEmitter();

  public currentValue: any;
  public dropdownOpen: boolean = false;
  public get dropdownElement(): Element {
    return this.elem.nativeElement.querySelector('.dropdown-list');
  }

  private currentIndex = -1;

  constructor(private elem: ElementRef) {}

  ngOnInit(): void {
    this.currentValue = this.options[0];
  }

  handleKeyboardEvents($event: KeyboardEvent) {
    if (this.dropdownOpen) {
      $event.preventDefault();
    } else return;

    switch ($event.code) {
      case 'ArrowUp': {
        if (this.currentIndex < 0) {
          this.currentIndex = 0;
        } else if (this.currentIndex > 0) {
          this.currentIndex--;
        }
        this.elem.nativeElement
          .querySelectorAll('li')
          .item(this.currentIndex)
          .focus();
        break;
      }
      case 'ArrowDown': {
        if (this.currentIndex < 0) {
          this.currentIndex = 0;
        } else if (this.currentIndex < this.options.length - 1) {
          this.currentIndex++;
        }
        this.elem.nativeElement
          .querySelectorAll('li')
          .item(this.currentIndex)
          .focus();
        break;
      }
      case 'Enter': {
        if (this.currentIndex >= 0) this.selectByIndex(this.currentIndex);
        break;
      }
      case 'NumpadEnter': {
        if (this.currentIndex >= 0) this.selectByIndex(this.currentIndex);
        break;
      }
      case 'Escape': {
        this.closeDropdown();
        break;
      }
    }
  }

  closeDropdown() {
    this.dropdownElement.setAttribute('aria-expanded', 'false');
    this.currentIndex = -1;
    this.dropdownOpen = false;
  }

  selectByIndex(i: number) {
    let value = this.options[i];
    this.select(value);
  }

  select(value: any) {
    this.currentValue = value;
    this.closeDropdown();
    this.currentValueChange.emit(this.currentValue);
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
    this.dropdownElement.setAttribute(
      'aria-expanded',
      this.dropdownOpen ? 'true' : 'false'
    );
  }
}
