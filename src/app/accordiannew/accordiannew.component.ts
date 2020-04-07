import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-accordiannew',
  templateUrl: './accordiannew.component.html',
  styleUrls: ['./accordiannew.component.less']
})
export class AccordiannewComponent implements OnInit {

  data: any;
  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.dataService.getJSON().pipe().subscribe(response => {
      this.data = response;
      console.log(this.data);
    });
  }

  toggleAccordian(event, index) {
    var element = event.target;
    element.classList.toggle("active");
    if(this.data[index].isActive) {
      this.data[index].isActive = false;
    } else {
      this.data[index].isActive = true;
    }
    var panel = element.parentElement.nextElementSibling;
    //var panel = element.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
}

}
