using Core.Abstract.Entities;
using System;

namespace Core.Entities.Concrete
{
    public class OperationClaim:IEntity
    {
        public int Id { get; set; }
        public String Name { get; set; }
    }
}
