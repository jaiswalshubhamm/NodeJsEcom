'use strict';

module.exports = function (sequelize, DataTypes) {
  var OrderItem = sequelize.define('OrderItem', {
    orderId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    qty: DataTypes.INTEGER,
    image: DataTypes.STRING,
    price: DataTypes.FLOAT
  }, {});

  OrderItem.associate = function (models) {
    // associations can be defined here
    models.OrderItem.belongsTo(models.Order, {
      as: 'order',
      foreignKey: 'orderId',
      onDelete: 'CASCADE'
    });
    models.OrderItem.belongsTo(models.Product, {
      as: 'product',
      foreignKey: 'productId'
    });
  };

  return OrderItem;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvb3JkZXJJdGVtTW9kZWwuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInNlcXVlbGl6ZSIsIkRhdGFUeXBlcyIsIk9yZGVySXRlbSIsImRlZmluZSIsIm9yZGVySWQiLCJJTlRFR0VSIiwicHJvZHVjdElkIiwibmFtZSIsIlNUUklORyIsInF0eSIsImltYWdlIiwicHJpY2UiLCJGTE9BVCIsImFzc29jaWF0ZSIsIm1vZGVscyIsImJlbG9uZ3NUbyIsIk9yZGVyIiwiYXMiLCJmb3JlaWduS2V5Iiwib25EZWxldGUiLCJQcm9kdWN0Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQUEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFVBQUNDLFNBQUQsRUFBWUMsU0FBWixFQUEwQjtBQUN6QyxNQUFNQyxTQUFTLEdBQUdGLFNBQVMsQ0FBQ0csTUFBVixDQUFpQixXQUFqQixFQUE4QjtBQUM5Q0MsSUFBQUEsT0FBTyxFQUFFSCxTQUFTLENBQUNJLE9BRDJCO0FBRTlDQyxJQUFBQSxTQUFTLEVBQUVMLFNBQVMsQ0FBQ0ksT0FGeUI7QUFHOUNFLElBQUFBLElBQUksRUFBRU4sU0FBUyxDQUFDTyxNQUg4QjtBQUk5Q0MsSUFBQUEsR0FBRyxFQUFFUixTQUFTLENBQUNJLE9BSitCO0FBSzlDSyxJQUFBQSxLQUFLLEVBQUVULFNBQVMsQ0FBQ08sTUFMNkI7QUFNOUNHLElBQUFBLEtBQUssRUFBRVYsU0FBUyxDQUFDVztBQU42QixHQUE5QixFQU9mLEVBUGUsQ0FBbEI7O0FBUUFWLEVBQUFBLFNBQVMsQ0FBQ1csU0FBVixHQUFzQixVQUFVQyxNQUFWLEVBQWtCO0FBQ3RDO0FBQ0FBLElBQUFBLE1BQU0sQ0FBQ1osU0FBUCxDQUFpQmEsU0FBakIsQ0FBMkJELE1BQU0sQ0FBQ0UsS0FBbEMsRUFBeUM7QUFBRUMsTUFBQUEsRUFBRSxFQUFFLE9BQU47QUFBZUMsTUFBQUEsVUFBVSxFQUFFLFNBQTNCO0FBQXNDQyxNQUFBQSxRQUFRLEVBQUU7QUFBaEQsS0FBekM7QUFDQUwsSUFBQUEsTUFBTSxDQUFDWixTQUFQLENBQWlCYSxTQUFqQixDQUEyQkQsTUFBTSxDQUFDTSxPQUFsQyxFQUEyQztBQUFFSCxNQUFBQSxFQUFFLEVBQUUsU0FBTjtBQUFpQkMsTUFBQUEsVUFBVSxFQUFFO0FBQTdCLEtBQTNDO0FBQ0QsR0FKRDs7QUFLQSxTQUFPaEIsU0FBUDtBQUNELENBZkQiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IChzZXF1ZWxpemUsIERhdGFUeXBlcykgPT4ge1xuICBjb25zdCBPcmRlckl0ZW0gPSBzZXF1ZWxpemUuZGVmaW5lKCdPcmRlckl0ZW0nLCB7XG4gICAgb3JkZXJJZDogRGF0YVR5cGVzLklOVEVHRVIsXG4gICAgcHJvZHVjdElkOiBEYXRhVHlwZXMuSU5URUdFUixcbiAgICBuYW1lOiBEYXRhVHlwZXMuU1RSSU5HLFxuICAgIHF0eTogRGF0YVR5cGVzLklOVEVHRVIsXG4gICAgaW1hZ2U6IERhdGFUeXBlcy5TVFJJTkcsXG4gICAgcHJpY2U6IERhdGFUeXBlcy5GTE9BVCxcbiAgfSwge30pO1xuICBPcmRlckl0ZW0uYXNzb2NpYXRlID0gZnVuY3Rpb24gKG1vZGVscykge1xuICAgIC8vIGFzc29jaWF0aW9ucyBjYW4gYmUgZGVmaW5lZCBoZXJlXG4gICAgbW9kZWxzLk9yZGVySXRlbS5iZWxvbmdzVG8obW9kZWxzLk9yZGVyLCB7IGFzOiAnb3JkZXInLCBmb3JlaWduS2V5OiAnb3JkZXJJZCcsIG9uRGVsZXRlOiAnQ0FTQ0FERScgfSk7XG4gICAgbW9kZWxzLk9yZGVySXRlbS5iZWxvbmdzVG8obW9kZWxzLlByb2R1Y3QsIHsgYXM6ICdwcm9kdWN0JywgZm9yZWlnbktleTogJ3Byb2R1Y3RJZCcgfSk7XG4gIH07XG4gIHJldHVybiBPcmRlckl0ZW07XG59OyJdfQ==