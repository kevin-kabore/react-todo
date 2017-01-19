var expect = require('expect')
var reducers = require('reducers')
var df = require('deep-freeze-strict')


describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('Should set searchText', ()=> {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };
      var res = reducers.searchTextReducer(df(''), df(action));
      expect(res).toEqual(action.searchText)
    });
    //test that the showCompleted Status gets flipped
  })
  describe('showCompletedReducer', () =>{
    it('SHould toggle showCompleted Status', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      }
      var res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toEqual(true)
    })
  })
  describe('todosReducer', () =>{
    it('Should add new Todo', () => {
      var action = {
        type: 'ADD_TODO',
        text: 'Walk the dog'
      }
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1)
      expect(res[0].text).toEqual(action.text);
    })

    //Define todos array with realistic todo item
    //Generate an actoion that matches id
     it('Should toggle Todo and update completedAt', () => {
       var todos = [
         {
           id: 2,
           text: 'Test Todo',
           completed: true,
           createdAt: 123,
           completedAt: 125
         }
       ]
       var action = {
         type: 'TOGGLE_TODO',
         id: 2
       }
       var res = reducers.todosReducer(df(todos), df(action));

       expect(res[0].completed).toEqual(false)
       expect(res[0].completedAt).toBe(undefined)
     })
  })
})