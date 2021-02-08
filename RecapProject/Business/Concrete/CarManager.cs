using Businesss.Abstract;
using DataAccess.Abstract;
using Entities.Concrete;
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
            }
        }

        public List<Car> GetAll()
        {
            return _carDal.GetAll();
        }

        public List<Car> GetCarsByBrandId(int ıd)
        {
            return _carDal.GetAll(c => c.BrandId == ıd);
        }

        public List<Car> GetCarsByColorId(int ıd)
        {
            return _carDal.GetAll(c=>c.ColorId == ıd);
        }
    }
}
