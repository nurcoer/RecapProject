using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business.Abstract
{
    public interface IBrandService
    {
        void Update(Brand car);
        void Delete(Brand car);
        List<Brand> GetAll();
        void Add(Brand car);
    }
}
