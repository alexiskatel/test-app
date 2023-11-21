import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CryptageComponent } from './components/cryptage/cryptage.component';
import { DecryptageComponent } from './components/decryptage/decryptage.component';

const routes: Routes = [
  {
    path: '',
    component: CryptageComponent
  },
  {
    path: 'decryptage',
    component: DecryptageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
