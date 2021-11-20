import { shallowMount } from '@vue/test-utils'
import Button from '@/components/Button.vue'

describe('Button.vue', () => {
  const wrapper = shallowMount(Button);

    it('calls increment method when button is clicked', () => {
        const jsdomAlert = window.alert;  // remember the jsdom alert
        window.alert = () => {}; // provide an empty implementation for window.alert

        //find the oruga button component and trigger click event
        wrapper.find('o-button').trigger('click');
       window.alert = jsdomAlert;
    })
})
