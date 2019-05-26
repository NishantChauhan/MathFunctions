import { Pipe, PipeTransform } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CustomPipeComponent } from './custom-pipe.component';

@Pipe({ name: 'binaryString' })
class MockBinaryPipe implements PipeTransform {
  transform(decimal: number) {
    const binaryString = '';
    if (decimal === 10) {
      return '1010';
    }
    return binaryString;
  }
}

describe('CustomPipeComponent', () => {
  let component: CustomPipeComponent;
  let fixture: ComponentFixture<CustomPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomPipeComponent, MockBinaryPipe],
      imports: [FormsModule],
      providers: [],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should convert decimal 10 to binary 1010', () => {
    component.decimalNumber = 10;
    fixture.detectChanges();
    const element: HTMLElement = fixture.debugElement.nativeElement.querySelector(
      '#binaryNumber'
    );
    expect(element.textContent).toBe('1010');
  });
});
