using Businesss.Abstract;
using DataAccess.Abstract;
using Entities.Concrete;
using Entities.DTOs;
using System;
using System.Collections.Generic;
using System.Text;

namespace Businesss.Concrete
{
    public class CarManager : ICarService
    {
        ICarDal _carDal;
        public CarManager(ICarDal carDal)
        {
            _carDal = carDal;
        }

        public void Add(Car car)
        {

            if (car.CarName.Length < 2)
            {
                Console.WriteLine("Araç adı en az  2 karakterden oluşmalıdır. ");
            }
            else if (car.DailyPrice <= 0)
            {
                Console.WriteLine("Bir Aracın günlük fiyatı 0 olamaz. ");
            }
            else
            {
                _carDal.Add(car);
                Console.WriteLine("Araç Eklendi");
            }
        }

        public void Delete(Car car)
        {
            _carDal.Delete(car);
            Console.WriteLine("Car Deleted");
        }

        public List<Car> GetAll()
        {
            return _carDal.GetAll();
        }

        public List<CarDetails> GetCarDetails()
        {
            return _carDal.GetCarDetails();
        }

        public List<Car> GetCarsByBrandId(int ıd)
        {
            return _carDal.GetAll(c => c.BrandId == ıd);
        }

        public List<Car> GetCarsByColorId(int ıd)
        {
            return _carDal.GetAll(c=>c.ColorId == ıd);
        }

        public void Update(Car car)
        {
            _carDal.Update(car);
            Console.WriteLine("car Updated");
        }
    }
}
