import { Component, Input, OnInit } from '@angular/core';
import { NgFlowchartStepComponent } from '../../../../../ng-flowchart/src/lib/ng-flowchart-step/ng-flowchart-step.component';
import { FormsModule } from '@angular/forms';

export type MyForm = {
  name: String;
  type: String;
  // 延迟
  delay: Number;
  // 超时
  timeout: Number;
  // 必须校验
  required: Boolean;
  // 节点
  nodes: [];
};

@Component({
  selector: 'app-form-step',
  templateUrl: './form-click.component.html',
  styleUrls: ['./form-click.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
  ],
})
export class FormClickComponent extends NgFlowchartStepComponent<MyForm> implements OnInit {
  constructor() {
    super();
  }

  protected types: string;

  ngOnInit(): void {
    console.log(this.data);
  }

}
