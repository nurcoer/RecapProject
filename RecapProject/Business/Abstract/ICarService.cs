using Entities.Concrete;
using Entities.DTOs;
using System;
using System.Collections.Generic;
using System.Text;

namespace Businesss.Abstract
{
    public interface ICarService
    {
        void Update(Car car);
        void Delete(Car car);
        List<Car> GetAll();
        void Add(Car car);
        List<Car> GetCarsByBrandId(int Id);
        List<Car> GetCarsByColorId(int Id);
        List<CarDetails> GetCarDetails();

    }
}
