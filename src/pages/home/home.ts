import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient} from '@angular/common/http';
// import{Platform} from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public tap: number = 0;
  results:any=[];
  comments = [];
  message: string;
pid:'';
uid: '';
  constructor(public navCtrl: NavController, public http:HttpClient) {

this.getComment();
  }
sendComment(){
    if(this.message != ''){
      
      var data={postid:this.pid,userid:this.uid,comment:this.message};
      
      this.http.post('http://localhost:9999/tb2',data).subscribe((res : any) => {
        // this.comments.push(this.message);
   
        this.message = '';
       this.uid = '';
       this.pid = '';
       
      })
      console.log('as');
    this.getComment();
    }

  }
  getComment(){
   
      this.http.get('http://localhost:9999/tb1').subscribe((res : any) => {
        
   this.results=res;
console.log('done');
      })
  }
  ionViewDidLoad(){
 
  
  
  }
  tapEvent(e) {
    this.tap++
  }

}
