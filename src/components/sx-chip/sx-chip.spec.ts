import { TestWindow } from '@stencil/core/dist/testing';
import { SXChip } from './sx-chip';

describe('sx-devider', () => {
  it('should build', () => {
    expect(new SXChip()).toBeTruthy();
  });

  describe('rendering', () => {
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
    });

    // it('should work without parameters', async () => {
    //   let element: HTMLSXChipElement;
    //   element = await testWindow.load({
    //     components: [SXChip],
    //     html: '<sx-divider></sx-divider>'
    //   });
    //   expect(element.textContent.trim()).toEqual('Button');
    // });
  });
});
