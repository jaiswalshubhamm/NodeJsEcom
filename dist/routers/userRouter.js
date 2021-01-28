"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _utils = require("../utils.js");

var _userController = require("../controllers/userController");

var userRouter = (0, _express.Router)();
userRouter.get('/top-sellers', _userController.topSellers);
userRouter.get('/seed', _userController.seedUsers);
userRouter.post('/signin', _userController.signIn);
userRouter.post('/register', _userController.register);
userRouter.get('/:id', _userController.getUser);
userRouter.put('/profile', _utils.isAuth, _userController.updateProfile);
userRouter.get('/', _utils.isAuth, _utils.isAdmin, _userController.getUsers);
userRouter["delete"]('/:id', _userController.deleteUser);
userRouter.put('/:id', _utils.isAuth, _utils.isAdmin, _userController.updateUser);
var _default = userRouter;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXJzL3VzZXJSb3V0ZXIuanMiXSwibmFtZXMiOlsidXNlclJvdXRlciIsImdldCIsInRvcFNlbGxlcnMiLCJzZWVkVXNlcnMiLCJwb3N0Iiwic2lnbkluIiwicmVnaXN0ZXIiLCJnZXRVc2VyIiwicHV0IiwiaXNBdXRoIiwidXBkYXRlUHJvZmlsZSIsImlzQWRtaW4iLCJnZXRVc2VycyIsImRlbGV0ZVVzZXIiLCJ1cGRhdGVVc2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBSUE7O0FBRkEsSUFBTUEsVUFBVSxHQUFHLHNCQUFuQjtBQUlBQSxVQUFVLENBQUNDLEdBQVgsQ0FBZSxjQUFmLEVBQStCQywwQkFBL0I7QUFDQUYsVUFBVSxDQUFDQyxHQUFYLENBQWUsT0FBZixFQUF3QkUseUJBQXhCO0FBQ0FILFVBQVUsQ0FBQ0ksSUFBWCxDQUFnQixTQUFoQixFQUEyQkMsc0JBQTNCO0FBQ0FMLFVBQVUsQ0FBQ0ksSUFBWCxDQUFnQixXQUFoQixFQUE2QkUsd0JBQTdCO0FBQ0FOLFVBQVUsQ0FBQ0MsR0FBWCxDQUFlLE1BQWYsRUFBdUJNLHVCQUF2QjtBQUNBUCxVQUFVLENBQUNRLEdBQVgsQ0FBZSxVQUFmLEVBQTJCQyxhQUEzQixFQUFtQ0MsNkJBQW5DO0FBQ0FWLFVBQVUsQ0FBQ0MsR0FBWCxDQUFlLEdBQWYsRUFBb0JRLGFBQXBCLEVBQTRCRSxjQUE1QixFQUFxQ0Msd0JBQXJDO0FBQ0FaLFVBQVUsVUFBVixDQUFrQixNQUFsQixFQUEwQmEsMEJBQTFCO0FBQ0FiLFVBQVUsQ0FBQ1EsR0FBWCxDQUFlLE1BQWYsRUFBdUJDLGFBQXZCLEVBQStCRSxjQUEvQixFQUF3Q0csMEJBQXhDO2VBRWVkLFUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IHsgaXNBdXRoLCBpc0FkbWluIH0gZnJvbSAnLi4vdXRpbHMuanMnO1xyXG5cclxuY29uc3QgdXNlclJvdXRlciA9IFJvdXRlcigpO1xyXG5cclxuaW1wb3J0IHsgdG9wU2VsbGVycywgc2VlZFVzZXJzLCBzaWduSW4sIHJlZ2lzdGVyLCBnZXRVc2VyLCB1cGRhdGVQcm9maWxlLCBnZXRVc2VycywgZGVsZXRlVXNlciwgdXBkYXRlVXNlciwgfSBmcm9tICcuLi9jb250cm9sbGVycy91c2VyQ29udHJvbGxlcic7XHJcblxyXG51c2VyUm91dGVyLmdldCgnL3RvcC1zZWxsZXJzJywgdG9wU2VsbGVycyk7XHJcbnVzZXJSb3V0ZXIuZ2V0KCcvc2VlZCcsIHNlZWRVc2Vycyk7XHJcbnVzZXJSb3V0ZXIucG9zdCgnL3NpZ25pbicsIHNpZ25Jbik7XHJcbnVzZXJSb3V0ZXIucG9zdCgnL3JlZ2lzdGVyJywgcmVnaXN0ZXIpO1xyXG51c2VyUm91dGVyLmdldCgnLzppZCcsIGdldFVzZXIpO1xyXG51c2VyUm91dGVyLnB1dCgnL3Byb2ZpbGUnLCBpc0F1dGgsIHVwZGF0ZVByb2ZpbGUpO1xyXG51c2VyUm91dGVyLmdldCgnLycsIGlzQXV0aCwgaXNBZG1pbiwgZ2V0VXNlcnMpO1xyXG51c2VyUm91dGVyLmRlbGV0ZSgnLzppZCcsIGRlbGV0ZVVzZXIpO1xyXG51c2VyUm91dGVyLnB1dCgnLzppZCcsIGlzQXV0aCwgaXNBZG1pbiwgdXBkYXRlVXNlcik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VyUm91dGVyOyJdfQ==