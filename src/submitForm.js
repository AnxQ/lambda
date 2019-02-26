import React from 'react'
import {List, InputItem, Checkbox, Picker, Button, WhiteSpace, WingBlank, TextareaItem} from 'antd-mobile';
import request, {get, post} from './utils/request'
import {createForm} from 'rc-form';

import logo from './logo.svg';

const CheckboxItem = Checkbox.CheckboxItem;
const Item = List.Item;

// 通过自定义 moneyKeyboardWrapProps 修复虚拟键盘滚动穿透问题
const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let moneyKeyboardWrapProps;
if (isIPhone) {
  moneyKeyboardWrapProps = {
    onTouchStart: e => e.preventDefault(),
  };
}

class SubmitForm extends React.Component {
  componentDidMount() {
    // this.autoFocusInst.focus();
    
  }

  handleClick = () => {
    this.inputRef.focus();
  };

  onLanguageChange = (val) => {
    this.props.form.getFieldValue('lang')
  };

  onSubmit = () => {
    this.props.form.validateFields({force: true}, (error) => {
      if (!error) {
        console.log(this.props.form.getFieldsValue());
        post('/register', this.props.form.getFieldsValue())
            .then((res) => {
              console.log(res);
              console.log(res ? "T": "F");
            })
      }
    });
  };

  render() {
    const {getFieldProps, getFieldError} = this.props.form;
    const language = [
      {value: 0, label: '初学者'},
      {value: 1, label: 'Python'},
      {value: 2, label: 'Julia'},
      {value: 3, label: 'C/C++'},
      {value: 4, label: 'C#'},
      {value: 5, label: 'Java(以及所有类Java语言)'}
    ];
    const year = [
      {
        label: '2014',
        value: '2014',
      },
      {
        label: '2015',
        value: '2015',
      },
      {
        label: '2016',
        value: '2016',
      },
      {
        label: '2017',
        value: '2017',
      },
      {
        label: '2018',
        value: '2018',
      },
    ];
    const gender = [
      {
        label: '男',
        value: 'M',
      },
      {
        label: '女',
        value: 'F',
      }
    ];
    return (
        <form>
          <br/>
          <List>
            <Item
                align="top"
                thumb={<img className="App-logo" src={logo} alt=""/>}
                multipleLine
            >
              Info
              <Item.Brief>Join</Item.Brief>
            </Item>
          </List>
          <List renderHeader={() => '基本信息'}>
            <InputItem
                {...getFieldProps('name',
                    {
                      rules: [
                        {required: true, message: '请输入姓名'}
                      ]
                    })}
                clear
                error={!!getFieldError('name')}
                onErrorClick={() => {
                  alert(getFieldError('name').join('、'));
                }}
                placeholder="沈东来"
                ref={el => this.autoFocusInst = el}
            >姓名</InputItem>
            <InputItem
                {...getFieldProps('phone',
                    {
                      rules: [
                        {required: true, message: '请输入手机号'},
                        {validator: this.validatePhone}
                      ]
                    })}
                clear
                error={!!getFieldError('phone')}
                onErrorClick={() => {
                  alert(getFieldError('phone').join('、'));
                }}
                type="phone"
                placeholder="130 5666 6666"
            >手机号码</InputItem>
            <Picker data={gender} cols={1}
                    {...getFieldProps('gender', {
                      rules: [
                        {required: true, message: '请选择性别'}
                      ]
                    })}
                    clear
                    className="forss">
              <List.Item arrow="horizontal">性别</List.Item>
            </Picker>
            <Picker data={year} cols={1}
                    {...getFieldProps('year', {
                      rules: [
                        {required: true, message: '请选择入学年份'}
                      ]
                    })}
                    clear
                    className="forss">
              <List.Item arrow="horizontal">入学年份</List.Item>
            </Picker>
          </List>
          <List renderHeader={() => '语言基础'}>
            {language.map(i => (
                <CheckboxItem
                    key={i.value} onChange={() => this.onLanguageChange(i.value)}>
                  {i.label}
                </CheckboxItem>
            ))}
          </List>
          <List renderHeader={() => '备注（兴趣/能力/事迹之类的）'}>
              <TextareaItem
                  {...getFieldProps('motto', {
                    rules: [
                      {required: false}
                    ]
                  })}
                  placeholder="请放飞自我"
                  rows={5}
                  count={200}
              />
          </List>
          <WhiteSpace/>
          <WingBlank>
            <Button type="primary" onClick={this.onSubmit}>提交</Button><WhiteSpace/>
          </WingBlank>
        </form>
    );
  }
}

const SubmitFormWrapper = createForm()(SubmitForm);
export default SubmitFormWrapper;