import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-buton",
  templateUrl: "./buton.component.html",
  styleUrls: ["./buton.component.scss"],
})
export class ButonComponent implements OnInit {
  @Input() color!: String;
  @Input() text!: String;
  @Output() btnClick = new EventEmitter();
  constructor() {}

  onClick() {
    this.btnClick.emit();
  }
  ngOnInit(): void {}
}
