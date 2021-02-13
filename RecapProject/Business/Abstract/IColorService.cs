using Core.Utilities;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business.Abstract
{
    public interface IColorService
    {
        IResult Update(Color car);
        IResult Delete(Color car);
        IDataResult<List<Color>> GetAll();
        IResult Add(Color car);
    }
}
