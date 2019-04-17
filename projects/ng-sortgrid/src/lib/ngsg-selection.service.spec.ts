import createSpyObj = jasmine.createSpyObj;

import {NgsgSelectionService} from './ngsg-selection.service';
import {NgsgClassService} from './ngsg-class.service';
import {NgsgStoreService} from './ngsg-store.service';
import createSpy = jasmine.createSpy;
import {NgsgElementsHelper} from './ngsg-elements.helper';

describe('NgsgSelectionService', () => {

  const ngsgClassService = createSpyObj<NgsgClassService>('classService', ['addSelectedClass', 'addSelectedClass']);
  const ngsgStore = createSpyObj<NgsgStoreService>('ngsgStore', ['addSelectedItem', 'hasSelectedItems']);
  let sut: NgsgSelectionService;

  beforeEach(() => {
    sut = new NgsgSelectionService(ngsgClassService, ngsgStore);
  });

  afterEach(() => {
    const keyupEvent = new KeyboardEvent('keyun', {});
    window.dispatchEvent(keyupEvent);
  });

  describe('selectElementIfNoSelection', () => {

    it('should call hasSelectedItems with the group', () => {
      ngsgStore.hasSelectedItems.and.returnValue(true);
      const dragedElement = 'Cool element' as any;
      const group = 'herogroup';

      sut.selectElementIfNoSelection(group, dragedElement);
      expect(ngsgStore.hasSelectedItems).toHaveBeenCalledWith(group);
    });

    it('should not addSelectedItem to the store if there are allready items selected', () => {
      ngsgStore.hasSelectedItems.and.returnValue(true);
      const dragedElement = 'Cool element' as any;
      const group = 'herogroup';

      sut.selectElementIfNoSelection(group, dragedElement);
      expect(ngsgStore.addSelectedItem).not.toHaveBeenCalled();
    });

    it('should addSelectedItem to the store if no item is yet selected', () => {
      ngsgStore.hasSelectedItems.and.returnValue(false);
      const dragedElement = 'Cool element' as any;
      const group = 'herogroup';
      const originalIndex = 2;

      const findIndexSpy = createSpy();
      findIndexSpy.and.returnValue(originalIndex);
      NgsgElementsHelper.findIndex = findIndexSpy;

      sut.selectElementIfNoSelection(group, dragedElement);

      expect(findIndexSpy).toHaveBeenCalledWith(dragedElement);
      expect(ngsgStore.addSelectedItem).toHaveBeenCalledWith(group, {
        node: dragedElement, originalIndex
      });
    });

    describe('Selection change', () => {

      it('should add the selectedItem if the Meta key is pressed and the item is clicked', () => {

        const event = new KeyboardEvent('keydown', {
          key: 'Meta'
        });
        const group = 'groupOne';
        const item = 'Some element' as any;
        const selected = true;
        const index = 2;
        NgsgElementsHelper.findIndex = () => index;

        window.dispatchEvent(event);
        sut.updateSelectedDragItem(group, item, selected);

        expect(ngsgStore.addSelectedItem).toHaveBeenCalledWith(group, {node: item, originalIndex: index});
      });
    });

  });
});
