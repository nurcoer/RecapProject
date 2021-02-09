using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business.Abstract
{
    public interface IColorService
    {
        void Update(Color car);
        void Delete(Color car);
        List<Color> GetAll();
        void Add(Color car);
    }
}
