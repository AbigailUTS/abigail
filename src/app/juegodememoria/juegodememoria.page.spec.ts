import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JuegodememoriaPage } from './juegodememoria.page';

describe('JuegodememoriaPage', () => {
  let component: JuegodememoriaPage;
  let fixture: ComponentFixture<JuegodememoriaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(JuegodememoriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
