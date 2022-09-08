import { Component, OnInit } from '@angular/core';
import { FaqCategoryType, FaqType } from 'types/faq';
import { FaqsService } from '../services/faqs-service/faqs.service';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss'],
})
export class FaqsComponent implements OnInit {
  categories: FaqCategoryType[] = [];
  questions: FaqType[] = [];
  filteredQuestions: FaqType[] = [];
  selectedCategory = 0;

  constructor(private faqsService: FaqsService) {}

  ngOnInit(): void {
    this.fetchCategories();
  }

  fetchCategories() {
    this.faqsService.getQuestionCategories().subscribe((data) => {
      this.categories = data;
      this.selectedCategory = this.categories[0].id;
      this.fetchFaqs();
    });
  }

  fetchFaqs() {
    this.faqsService.getFaqs().subscribe((data) => {
      this.questions = data;
      this.filterQuestion();
    });
  }

  filterQuestion() {
    this.filteredQuestions = this.questions.filter(
      (question) => question.category.id === this.selectedCategory
    );
  }

  setSelectedCategory(id: number) {
    this.selectedCategory = id;
    this.filterQuestion();
  }
}
