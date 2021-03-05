
using Business.Abstract;
using Business.BusinessAspects.Autofac;
using Business.Constants;
using Business.ValidationRules.FluentValidation;
using Core.Aspects.Autofac.Validation;
using Core.CrossCuttingConcerns.Validation;
using Core.Results.Utilities;
using DataAccess.Abstract;
using Entities.Concrete;
using Entities.DTOs;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business.Concrete
{
    public class CarManager : ICarService
    {
        ICarDal _carDal;
        public CarManager(ICarDal carDal)
        {
            _carDal = carDal;
        }
        [SecuredOperation("admin")]
        [ValidationAspect(typeof(CarValidator))]
        public IResult Add(Car car)
        {
            //validation buraya gelen ürünün uymaı gereken kurallar. --> fluentValidation
            //business code kullanıcının bu işlemi yapmaya uygun olup olmadığı.
                _carDal.Add(car);
                return new SuccessResult(Messages.ProductAdded);
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
