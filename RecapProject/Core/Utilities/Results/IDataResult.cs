using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Results.Utilities
{
    public interface IDataResult<T> : IResult
    {
        T Data { get; }
    }
}
