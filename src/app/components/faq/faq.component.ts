import { Component } from '@angular/core';
import { IFaq, FaqService } from '../../services/faq.service';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {

  faqs: IFaq[] = [];

  constructor(private _faqService: FaqService) {}

  ngOnInit(): void {
    //get called once the component has been initialized

    this._faqService.getFaqs().subscribe((data) => (this.faqs = data));
  }

}
