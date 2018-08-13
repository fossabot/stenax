import { TestWindow } from '@stencil/core/dist/testing';
import { SXButton } from './sx-button';

describe('sx-button', () => {
  it('should build', () => {
    expect(new SXButton()).toBeTruthy();
  });

  describe('rendering', () => {
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
    });

    it('should work without parameters', async () => {
      let element: HTMLSxButtonElement;
      element = await testWindow.load({
        components: [SXButton],
        html: '<sx-button></sx-button>'
      });
      expect(element.textContent.trim()).toEqual('Button');
    });

    it('should work with name parameters', async () => {
      let element: HTMLSxButtonElement;
      element = await testWindow.load({
        components: [SXButton],
        html: '<sx-button name="Submit"></sx-button>'
      });
      expect(element.textContent.trim()).toEqual('Submit');
    });

    it('should work with name and color primary parameters', async () => {
      let element: HTMLSxButtonElement;
      element = await testWindow.load({
        components: [SXButton],
        html: '<sx-button name="Primary" color="primary"></sx-button>'
      });
      expect(element.textContent.trim()).toEqual('Primary');
      // expect(element.className.trim()).toEqual('sx-button sx-button-primary');
    });
  });
});
