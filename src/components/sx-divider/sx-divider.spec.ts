import { TestWindow } from '@stencil/core/dist/testing';
import { SXDivider } from './sx-divider';

describe('sx-devider', () => {
  it('should build', () => {
    expect(new SXDivider()).toBeTruthy();
  });

  describe('rendering', () => {
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
    });

    // it('should work without parameters', async () => {
    //   let element: HTMLSxDividerElement;
    //   element = await testWindow.load({
    //     components: [SXDivider],
    //     html: '<sx-divider></sx-divider>'
    //   });
    //   expect(element.textContent.trim()).toEqual('Button');
    // });
  });
});
