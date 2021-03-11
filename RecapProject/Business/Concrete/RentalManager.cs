using Business.Abstract;
using Business.BusinessAspects.Autofac;
using Business.Constants;
using Core.Aspects.Autofac.Caching;
using Core.Aspects.Autofac.Transaction;
using Core.Results.Utilities;
using DataAccess.Abstract;
using Entities.Concrete;
using System.Collections.Generic;

namespace Business.Concrete
{
    public class RentalManager : IRentalService
    {
        IRentalDal _rentalDal;

        public RentalManager(IRentalDal rentalDal)
        {
            _rentalDal = rentalDal;
        }
        [SecuredOperation("admin, editor")]
        [CacheRemoveAspect("IRentalService.Get")]
        [TransactionScopeAspect]
        public IResult Add(Rental rental)
        {
                if (rental.ReturnDate != null)
                {
                    _rentalDal.Add(rental);
                    return new SuccessResult(Messages.AddedRental);

                }
                else
                {
                    return new ErrorResult(Messages.ErrorAddedRental);
                }

            
        }

        [SecuredOperation("admin, editor")]
        [CacheRemoveAspect("IRentalService.Get")]
        [TransactionScopeAspect]
        public IResult Delete(Rental rental)
        {
            _rentalDal.Delete(rental);
            return new SuccessResult(Messages.DeletedRental);
        }
       [CacheAspect]
        public IDataResult<List<Rental>> GetAll()
        {
            return new SuccessDataResult<List<Rental>>(_rentalDal.GetAll());
        }

        [SecuredOperation("admin, editor")]
        [CacheRemoveAspect("IRentalService.Get")]
        [TransactionScopeAspect]
        public IResult Update(Rental rental)
        {
            _rentalDal.Update(rental);
            return new SuccessResult(Messages.UpdatedRental);
        }
    }
}
