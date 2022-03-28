import { RippleAnimation } from "../components/animations/ripple-animation";

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
    ripple.style.left = `${event.clientX - (this.targetElement.offsetLeft + radius)}px`;
    ripple.style.top = `${event.clientY - (this.targetElement.offsetTop + radius)}px`;
    
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
      case 'click':
        this.handleClick(event);
        break;
      case 'animationend':
        this.handleAnimationEnd(event);
        break;
    }
  }
  
  handleClick(event) {
    this.createRipple(event);
  }

  handleAnimationEnd(event) {
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