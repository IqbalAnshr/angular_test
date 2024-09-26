import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { BestSellingComponent } from './best_selling/best_selling.component';
import { BillboardComponent } from './billboard/billboard.component';
import { CustomerReviewComponent } from './customer_review/customer_review.component';
import { CategoriesComponent } from './categories/categories.component';
import { ServicesComponent } from './services/services.component';
import { ListItemComponent } from './list_item/list_item.component';
import { LimitedOfferComponent } from './limited_offer/limited_offer.component';
import { InstagramComponent } from './instagram/instagram.component';
import { LatestPostComponent } from './latest_post/latest_post.component';

import { BookService } from '../services/book.service';

@NgModule({
  declarations: [
    BestSellingComponent,
    BillboardComponent,
    CustomerReviewComponent,
    CategoriesComponent,
    ServicesComponent,
    ListItemComponent,
    LimitedOfferComponent,
    InstagramComponent,
    LatestPostComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [
    BookService
  ],
  exports: [
    BestSellingComponent,
    BillboardComponent,
    CustomerReviewComponent,
    CategoriesComponent,
    ServicesComponent,
    ListItemComponent,
    LimitedOfferComponent,
    InstagramComponent,
    LatestPostComponent
  ]
})
export class FeaturesModule {
  // Mencegah module ini untuk di-import lebih dari sekali
  constructor(@Optional() @SkipSelf() parentModule: FeaturesModule) {
    if (parentModule) {
      throw new Error(
        'FeaturesModule is already loaded. Import it in the AppModule only.');
    }
  }
}
