using Business.Constants;
using Businesss.Abstract;
using Core.Utilities;
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

        public IResult Add(Car car)
        {

            if (car.CarName.Length < 2)
            {
                return new ErrorResult(Messages.ProductNameInvalid);
            }
            else if (car.DailyPrice <= 0)
            {
                return new ErrorResult(Messages.ProductDailyPriceInvalid);
            }
            else
            {
                _carDal.Add(car);
                return new SuccessResult(Messages.ProductAdded);
            }
        }

        public IResult Delete(Car car)
        {
            _carDal.Delete(car);
            return new  SuccessResult(Messages.ProductDeleted);
        }

        public IDataResult<List<Car>> GetAll()
        {
            return new SuccessDataResult<List<Car>>(_carDal.GetAll(),Messages.ListedProduct) ;
        }

        public IDataResult<List<CarDetails>> GetCarDetails()
        {
            return new SuccessDataResult<List<CarDetails>>( _carDal.GetCarDetails(),Messages.GetCarDetailMessage);
        }

        public IDataResult<List<Car>> GetCarsByBrandId(int ıd)
        {
            return new SuccessDataResult<List<Car>>(_carDal.GetAll(c => c.BrandId == ıd),Messages.GetCarsByBrandId);
        }

        public IDataResult<List<Car>> GetCarsByColorId(int ıd)
        {
            return new SuccessDataResult<List<Car>>(_carDal.GetAll(c=>c.ColorId == ıd),Messages.GetCarsByColorId);
        }

        public IResult Update(Car car)
        {
            _carDal.Update(car);
            return new SuccessResult(Messages.ProductUpdated);
        }
    }
}
