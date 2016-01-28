describe('Github Profile finder', function() {

  var searchBox = element(by.model('searchCtrl.searchTerm'));
  var searchButton = element(by.className('btn'));
  var profiles = element.all(by.repeater('user in searchCtrl.searchResult.items'));

  beforeEach(function() {
    browser.get('http://localhost:8080');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Github user search');
  });

  it('finds profiles', function() {
    searchBox.sendKeys('spike');
    expect(profiles.getText()).toContain('spike01');
  });

  it('clear the page when the search box is cleared', function() {
    searchBox.sendKeys('spike');
    searchBox.clear();
    expect(element(by.className('list-group')).isDisplayed()).toBe(false);
  });
});
