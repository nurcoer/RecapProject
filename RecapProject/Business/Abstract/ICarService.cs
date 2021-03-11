using Core.Results.Utilities;
using Entities.Concrete;
using Entities.DTOs;
using System.Collections.Generic;

namespace Business.Abstract
{
    public interface ICarService
    {
        IResult Update(Car car);
        IResult Delete(Car car);
        IDataResult<List<Car>> GetAll();
        IResult Add(Car car);
        IDataResult<List<Car>> GetCarsByBrandId(int Id);
        IDataResult<List<Car>> GetCarsByColorId(int Id);
        IDataResult<List<CarDetails>> GetCarDetails();
        //aynı anda yapılan işlemleri iptal etmek için kullnılıyor.
        IResult AddTransactionTest(Car car);
    }
}
