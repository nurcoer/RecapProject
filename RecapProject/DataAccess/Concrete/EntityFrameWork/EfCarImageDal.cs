using Core.DataAccess.EntityFramework;
using DataAccess.Abstract;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccess.Concrete.EntityFrameWork
{
    public class EfCarImageDal: EfEntityRepositaryBase<CarImage, CarContext>, ICarImageDal
    {
        public List<CarImage> GetCarImages(int CarId)
        {
            return GetAll(c => c.CarId == CarId);
        }
    }
}
