using Business.Abstract;
using Business.Constants;
using Business.ValidationRules.FluentValidation;
using Core.Aspects.Autofac.Validation;
using Core.Results.Utilities;
using Core.Utilities.Business;
using Core.Utilities.FileOperations;
using DataAccess.Abstract;
using Entities.Concrete;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Text;


namespace Business.Concrete
{
    public class CarImageManager : ICarImageService
    {
        ICarImageDal _carImageDal;
        public CarImageManager(ICarImageDal carImageDal)
        {
            _carImageDal = carImageDal;
        }

        [ValidationAspect(typeof(CarImageValidator))]
        public IResult Add(CarImage carImage, IFormFile formFile)
        {
            IResult result = BusinessRules.Run(CheckIfMaxCarImage(carImage.CarId));
            if (result != null)
            {
                return result;
            }
            carImage.ImagePath = FileOperations.AddFile(formFile);
            carImage.Date = DateTime.Now;
            _carImageDal.Add(carImage);
            return new SuccessResult(Messages.AddedCarImage);
        }

        public IResult Delete(int id)
        {
            CarImage carImage = _carImageDal.GetById(c => c.Id == id);
            _carImageDal.Delete(carImage);
            return new SuccessResult(Messages.DeletedCarImage);
        }

        public IResult Update(int id)
        {
            CarImage carImage = _carImageDal.GetById(c => c.Id == id);
            _carImageDal.Update(carImage);
            return new SuccessResult(Messages.UpdatedCarImage);
        }

        public IDataResult<List<CarImage>> GetAll()
        {
            return new SuccessDataResult<List<CarImage>>(_carImageDal.GetAll());
        }

        public IDataResult<CarImage> GetById(int carImageId)
        {
            return new SuccessDataResult<CarImage>(_carImageDal.GetById(c => c.Id == carImageId));
        }

        public IDataResult<List<CarImage>> GetCarImages(int carId)
        {
            return new SuccessDataResult<List<CarImage>>(_carImageDal.GetAll(c => c.CarId == carId));
        }
        IResult CheckIfMaxCarImage(int carId)
        {
            var result = _carImageDal.GetAll(c => c.CarId == carId);
            if (result.Count > 5)
            {
                return new ErrorResult(Messages.MaxCarImage);
            }
            return new SuccessResult();
        }
    }
}
