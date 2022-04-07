import { RippleAnimation } from "../components/animations/ripple-animation.js";

/**
 * @class RippleController
 * @classdesc 
 * A Lit Reactive Controller that allows you to create a ripple effect on a specified element when clicked.
 * Pairs with the ripple-animation component. All ripples are removed from the DOM when their animation ends.
 * @param {HTMLElement} targetElement - The element to which you wish to apply the ripple effect.
 */
export class RippleController {
  rippleElements = [];

  constructor(host, targetElement) {
    this.host = host;
    this.targetElement = targetElement;
    host.addController(this);
  }

  createRipple(event) {
    const ripple = document.createElement('ripple-animation');
    const diameter = Math.max(this.targetElement.offsetWidth, this.targetElement.offsetHeight);
    const radius = diameter / 2;

    ripple.style.width = ripple.style.height = `${diameter}px`;

    let targetElementBounds = this.targetElement.getBoundingClientRect();
    ripple.style.left = `${event.clientX - targetElementBounds.left - radius}px`;
    ripple.style.top = `${event.clientY - targetElementBounds.top - radius}px`;
    
    const appendedRipple = this.targetElement.appendChild(ripple);
    appendedRipple.addEventListener('animationend', this);

    this.rippleElements.push(appendedRipple);
  }

  cleanupRipple(ripple) {
    ripple.removeEventListener('animationend', this);
    this.targetElement.removeChild(ripple);
    this.rippleElements = this.rippleElements.filter(rippleElement => rippleElement !== ripple);
  }
  
  handleEvent(event) {
    switch (event.type) {
      // case 'click':
      //   this.handleClick(event);
      //   break;
      case 'animationend':
        this.handleAnimationEnd(event);
        break;
    }
  }
  
  handleClick(event) {
    this.createRipple(event);
  }

  handleAnimationEnd(event) {
    const redispatchedEvent = new CustomEvent('animationend', {
      bubbles: true,
      detail: event.detail,
    });
    this.host.dispatchEvent(redispatchedEvent);
    this.cleanupRipple(event.target);
  }
    
  hostConnected() {
    this.targetElement.addEventListener('click', this);
  }

  hostDisconnected() {
    this.targetElement.removeEventListener('click', this);
    this.host.removeController(this);
  }
}