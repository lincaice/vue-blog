import Message from './message'
import Vue from 'vue';
import vuetify from '../vuetify';

let instance;
let instances = [];
let seed = 1;

const MessageBox = function (options) {
  // options相关判断
  options = options || {};
  if (typeof options === 'string') {
    options = {
      message: options
    };
  }
  // 实例化 MessageComponent 并进行相关配置
  let MessageComponent = Vue.extend(Message);
  let id = 'message_' + seed++;
  instance = new MessageComponent({
    data: {
      onClose() {
        MessageBox.close(id);
      }
    },
    propsData: options
  });
  instance.id = id;
  instance.$vuetify = vuetify.framework

  // 计算位置并挂载到v-app上
  document.querySelector('.v-application').appendChild(instance.$mount().$el);
  let verticalOffset = options.offset || 20;
  instance.alertVisiable = true;
  instances.forEach(item => {
    verticalOffset += item.$el.offsetHeight + 16;
  });
  instance.verticalOffset = verticalOffset;
  instances.push(instance);
  return instance;
}

// 消息弹窗关闭时进行其他弹窗位置的相应移动
MessageBox.close = function(id) {
  let len = instances.length;
  let index = -1;
  let removedHeight;
  for (let i = 0; i < len; i++) {
    if (id === instances[i].id) {
      removedHeight = instances[i].$el.offsetHeight;
      index = i;
      instances.splice(i, 1);
      break;
    }
  }
  if (len <= 1 || index === -1 || index > instances.length - 1) return;
  for (let i = index; i < len - 1 ; i++) {
    let dom = instances[i].$el;
    dom.style['top'] =
      parseInt(dom.style['top'], 10) - removedHeight - 16 + 'px';
  }
};

export default MessageBox
