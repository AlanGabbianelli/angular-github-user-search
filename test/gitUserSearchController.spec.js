describe('GitUserSearch Controller', function() {
  beforeEach(module('GitUserSearch'));

  var ctrl;

  describe('empty page', function() {
    beforeEach(inject(function($controller) {
      ctrl = $controller('GitUserSearchController');
    }));

    it('initializes with an empty search result and term', function() {
      expect(ctrl.searchResult).toBeUndefined();
      expect(ctrl.searchTerm).toBe('');
    });
  });

  describe('when searching for a user', function() {

    beforeEach(function() {
      fakeSearch = jasmine.createSpyObj('fakeSearch', ['query']);
      module({ Search: fakeSearch });
    });

    beforeEach(inject(function($q, $rootScope, $controller) {
      ctrl = $controller('GitUserSearchController');
      scope = $rootScope;
      fakeSearch.query.and.returnValue($q.when({ data: items }));
    }));

    it('displays search results', function() {
      ctrl.searchTerm = 'tansaku';
      ctrl.doSearch();
      scope.$apply();
      expect(ctrl.searchResult).toEqual(items);
    });
  });
});
