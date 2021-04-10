using Core.Entities.Concrete;
using Core.Results.Utilities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business.Abstract
{
    public interface IUserService
    {
        IResult Update(User user);
        IResult Delete(User user);
        IDataResult<List<User>> GetAll();
        IResult Add(User user);
        IDataResult<User> GetByUser(int userId);
        List<OperationClaim> GetClaims(User user);
        User GetByMail(string email); 
    }
}
