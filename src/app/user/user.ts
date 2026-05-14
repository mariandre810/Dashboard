import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.html',
  styles: ``,
})
export class User implements OnInit {
  usuarios: any[]=[];

  constructor(private cd: ChangeDetectorRef){}
    
  ngOnInit(): void {

    this.obtenerUser();

  }
  

  async obtenerUser() {

    try {

      const response= 
      await fetch("https://dummyjson.com/users");

      const data = 
        await response.json();

      console.log(data);
      this.usuarios = data.users;


      this.cd.detectChanges();

    } catch (error){

      console.log("Error Usuario:", error);
    }
  }
}
