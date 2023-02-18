import { Story, Meta } from "@storybook/angular";
import { MyCustomTableComponent } from "./my-custom-table.component";

export default{
    title: 'Table',
    component: MyCustomTableComponent
} as Meta;

const Template: Story<MyCustomTableComponent> = (args:MyCustomTableComponent)=>({
   props: args
});

export const BasicTable = Template.bind({});
BasicTable.args={
    tableData: [
        {
            name: 'John',
            age: 20,
            gender: 'M'
          },
          {
            name: 'Ruth',
            age: 24,
            gender: 'F'
          }
    ],
    columns: ['name','age', 'gender']
}

