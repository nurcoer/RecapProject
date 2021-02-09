using DataAccess.Abstract;
using Entities.Concrete;
using Entities.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

namespace DataAccess.Concrete.InMemory
{
    public class InMemoryCarDal : ICarDal
    {
        List<Car> _cars;
        public InMemoryCarDal()
        {
            //_cars = new List<Car> {
            //    new Car{ CarId = 1, BrandId = 1, ColorId = 1, DailyPrice = 1000, ModelYear = new DateTime(), Description = "Audi" },
            //    new Car{ CarId = 2, BrandId = 1, ColorId = 1, DailyPrice = 100, ModelYear = new DateTime(), Description = "Ford" },
            //    new Car{ CarId = 3, BrandId = 1, ColorId = 1, DailyPrice = 500, ModelYear = new DateTime(), Description = "BMW" },
            //    new Car{ CarId = 4, BrandId = 2, ColorId = 1, DailyPrice = 20, ModelYear = new DateTime(), Description = "Skoda" },
            //    new Car{ CarId = 5, BrandId = 2, ColorId = 1, DailyPrice = 50, ModelYear = new DateTime(), Description = "Tofaş" }
            //};
        }
        public void Add(Car car)
        {
            _cars.Add(car);
        }

        public void Delete(Car car)
        {
            Car deletedCar = _cars.SingleOrDefault(c => c.CarId == car.CarId);
            _cars.Remove(deletedCar);
        }

        public List<Car> GetAll()
        {
            return _cars;
        }

        public List<Car> GetAll(Expression<Func<Car, bool>> filter = null)
        {
            throw new NotImplementedException();
        }

        public Car GetById(int ıd)
        {
            return _cars.SingleOrDefault(c => c.CarId == ıd);
        }

        public Car GetById(Expression<Func<Car, bool>> filter)
        {
            throw new NotImplementedException();
        }

        public List<CarDetails> GetCarDetails()
        {
            throw new NotImplementedException();
        }

        public void Update(Car car)
        {
            Car updatedCar = _cars.SingleOrDefault(c => c.CarId == car.CarId);
            updatedCar.BrandId = car.BrandId;
            updatedCar.ColorId = car.ColorId;
            updatedCar.DailyPrice = car.DailyPrice;
            updatedCar.Description = car.Description;
            updatedCar.ModelYear = car.ModelYear;
        }
    }
}
