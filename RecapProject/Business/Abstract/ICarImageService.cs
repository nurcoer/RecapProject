using Core.Results.Utilities;
using Entities.Concrete;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business.Abstract
{
    public interface ICarImageService
    {
        IDataResult<List<CarImage>> GetAll();
        IDataResult<List<CarImage>> GetCarImages(int carId); 
        IDataResult<CarImage> GetById(int carImage);
        IResult Add(IFormFile formFile, CarImage carImage);
        IResult Delete(int id);
        IResult Update(int id);
    }
}
