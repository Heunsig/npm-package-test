import DummyButton from './components/DummyButtion.vue'
import DummyText from './components/DummyText.vue'

const components = {
  DummyButton,
  DummyText
}

export default {
  install (Vue) {
    Object.keys(components).forEach(name => {
      Vue.component(name, components[name])
    })
  }
}