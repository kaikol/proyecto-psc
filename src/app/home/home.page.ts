import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public http: HttpClient,public loadingController: LoadingController) {
    this.getUsersList()
  }
  usersList:any[]=[]
  usersListseed:any[]=[]
  async getUsersList()
  {
    const loading = await this.loadingController.create({
      message: 'Cargado infromacion..',
      duration: 5000
    });
    await loading.present();

    this.http.get('https://randomuser.me/api/?results=20').subscribe(data=>{
      this.usersList=data["results"]
      loading.dismiss()
    })
  }
  async getUsersListSeed(seed)
  {
    const loading = await this.loadingController.create({
      message: 'Cargado infromacion..',
      duration: 5000
    });
    await loading.present();

    this.http.get('https://randomuser.me/api/?seed=20').subscribe(data=>{
      this.usersListseed=data["results"]
      loading.dismiss()
    })
  }
}
