import { Component, OnInit } from '@angular/core';
import {DragulaService} from 'ng2-dragula';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.css'],
  providers: [DataService]
})
export class DragAndDropComponent implements OnInit{

  tasks: { userId: number,
    open: { taskName: string; taskId: number; }[],
    planed: { taskName: string; taskId: number; }[],
    inProgress: { taskName: string; taskId: number; }[],
    inTesting: { taskName: string; taskId: number; }[],
    done: { taskName: string; taskId: number; }[]
  }[] = [];

  users: { userId: number; userName: string; tasks: {
    userId: number; open: {
      taskName: string; taskId: number }[];
      planed: { taskName: string; taskId: number }[];
      inProgress: { taskName: string; taskId: number }[];
      inTesting: { taskName: string; taskId: number }[];
      done: { taskName: string; taskId: number }[] }[] }[] | number | string;
  constructor(public dragulaService: DragulaService, private dataService: DataService) {
    dragulaService.drag.subscribe((value) => {
      this.onDrag(value.slice(1));
    });
    dragulaService.drop.subscribe((value) => {
      this.onDrop(value.slice(1));
    });
    dragulaService.over.subscribe((value) => {
      this.onOver(value.slice(1));
    });
    dragulaService.out.subscribe((value) => {
      this.onOut(value.slice(1));
    });

  }
  ngOnInit() {
    // this.tasks = this.tasks;
    this.users = this.dataService.user;
  }

  private onDrag(args) {
    let [e, el] = args;
    console.log("Z pojemnika nr: " + el.id + " pobrałem element " + e.id);
    console.log(e);
    // do something
  }

  private onDrop(args) {
    let [e, el] = args;
    // console.log(e.id);

    console.log("Do pojemnika nr: " + el.id);
    // do something
  }

  private onOver(args) {
    let [e, el, container] = args;

    // do something
  }

  private onOut(args) {
    let [e, el, container] = args;

    // do something
  }

  private infoXD(taskId: number){
    console.log(taskId);
  }

}
